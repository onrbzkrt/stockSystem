<?php

namespace App\Providers;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Str;

class SqlConvertProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {

        Builder::macro("toSqlWithBindings", function (){
            $bindings = array_map(function ($value)
            {
                if (is_numeric($value))
                {
                    return $value;
                }
                else
                {
                    return "'{$value}'";
                }
            }, $this->getBindings());

            return Str::replaceArray('?', $bindings,$this->toSql());
        });
    }
}
