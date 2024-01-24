<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function __invoke()
    {
        return view('admin.layouts.app');
    }

    public function index()
    {
        $users = User::latest()->get();
        return $users;
    }
}
