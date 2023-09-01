<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ProductToken
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (!$request->has('token') ||$request->token != '1234') {
            return redirect(route('sin_token'));
            // return redirect('sin_token');
            // return redirect()->route('sin_token');
        }

        return $next($request);
    }
}
