<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class Admin extends Model
{
    protected $table = 'admins';
    protected $primaryKey = 'id';
    protected $keyType = 'string';
    public $incrementing = false;

    protected $fillable = [
        'id',
        'name',
        'phone',
        'password',
        'email',
        'is_partner',
        'company_name',
        'company_industry_id',
        'company_city',
        'is_verified',
        'is_show',
        'logo'
    ];


    public function companyIndustry(): BelongsTo
    {
        return $this->belongsTo(CompanyIndustry::class, 'company_industry_id');
    }
}
