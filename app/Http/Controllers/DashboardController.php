<?php

namespace App\Http\Controllers;

use App\Models\Applicant;
use App\Models\CompanyIndustry;
use App\Models\EmploymentStatuses;
use App\Models\Major;
use App\Models\Occupations;
use App\Models\User;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;

class DashboardController extends Controller
{

    public function index(): Response
    {
        $user = Auth::user();
        $jobs = Occupations::with(['company_industry'])->latest()->take(5)->get();
        return Inertia::render('Dashboard', ['user' => $user, 'jobs' => $jobs]);
    }

    public function tracerForm(): Response
    {
        $user = Auth::user();

        $majors = Major::all();
        $companies = CompanyIndustry::all();
        $statuses = EmploymentStatuses::all();
        return Inertia::render('TracerForm', ['user' => $user, 'majors' => $majors, 'companies' => $companies, 'statuses' => $statuses]);
    }

    public function applicant(): Response
    {
        $user = Auth::user();
        $applicants = Applicant::with(['occupation.company_industry', 'user'])->where('id_user', $user->id)->get();
        return Inertia::render('Applicant', ['user' => $user, 'applicants' => $applicants]);
    }

    public function updateResume(Request $request): RedirectResponse
    {
        $auth = Auth::user();
        $id = $auth->id;
        $request->validate([
            'document' => 'nullable|mimes:pdf|max:2048',
        ]);
        try {
            $user = User::findOrFail($id);
            if ($request->hasFile('document')) {
                $filename = time() . '.' . $request->document->extension();
                $path = $request->document->storeAs('documents', $filename, 'public');
                $user->document = url('/storage/' . $path);
            }
            $user->save();
            return redirect()->route('dashboard')->with('success', 'Resume/CV berhasil diperbarui');
        } catch (\Exception $e) {
            return redirect()->route('dashboard')()->withErrors(['error' => 'Terjadi kesalahan: ' . $e->getMessage()]);
        }
    }

    public function tracerFormSubmit(Request $request): RedirectResponse
    {
        $auth = Auth::user();
        $id = $auth->id;
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . $id,
            'NIS' => 'nullable|string|max:20',
            'graduation_year' => 'nullable|string',
            'major_id' => 'nullable|string',
            'status_id' => 'nullable|string',
            'company' => 'nullable|string|max:255',
            'company_industry_id' => 'nullable|string',
            'position' => 'nullable|string|max:255',
            'address' => 'nullable|string|max:255',
            'phone' => 'nullable|string|max:15',
            'latest_degree' => 'nullable|string|max:255',
            'university' => 'nullable|string|max:255',
            'faculty' => 'nullable|string|max:255',
            'photo' => 'nullable',
            'document' => 'nullable',
            'gender' => 'nullable|string|max:10',
        ]);

        try {
            $user = User::findOrFail($id);

            $user->name = $request->name;
            $user->email = $request->email;
            $user->NIS = $request->NIS;
            $user->graduation_year = $request->graduation_year;
            $user->major_id = $request->major_id;
            $user->status_id = $request->status_id;
            $user->company = $request->company;
            $user->company_industry_id = $request->company_industry_id;
            $user->position = $request->position;
            $user->address = $request->address;
            $user->phone = $request->phone;
            $user->latest_degree = $request->latest_degree;
            $user->university = $request->university;
            $user->faculty = $request->faculty;
            $user->gender = $request->gender;

            // Handle file uploads if any
            if ($request->hasFile('photo')) {
                // $user->photo = $request->file('photo')->store('photos');
                $filename = time() . '.' . $request->photo->extension();
                $path = $request->photo->storeAs('photos', $filename, 'public');
                $user->photo = url('/storage/' . $path);
            }
            if ($request->hasFile('document')) {
                // $user->document = $request->file('document')->store('documents');
                $filename = time() . '.' . $request->document->extension();
                $path = $request->document->storeAs('documents', $filename, 'public');
                $user->document = url('/storage/' . $path);
            }
            // dd($user->toArray());

            $user->save();

            return redirect()->route('dashboard')->with('success', 'Data user berhasil diperbarui');
        } catch (\Exception $e) {
            return redirect()->route('dashboard.tracer-form')()->withErrors(['error' => 'Terjadi kesalahan: ' . $e->getMessage()]);
        }
    }
}
