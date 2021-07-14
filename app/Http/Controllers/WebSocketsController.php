<?php

namespace App\Http\Controllers;

use App\Events\NewMessage;
use App\Events\TesteEnvio;
use Illuminate\Http\Request;

class WebSocketsController extends Controller
{
    public function sendEvent(Request $request) {
            /** item to trigger */
            $message = $request->toArray();
            /** send event */
            if($request->toEveryone === true) {
                broadcast(new NewMessage($message));
            } else {
                broadcast(new NewMessage($message))->toOthers();
            }
            /** return item */
            return response()->json($message);
    }

    public function sendEventTest(Request $request) {
        /** item to trigger */
        $message = [
            'content' => 'Olá voce recebeu uma notificaçao da compra tal'
        ];
        /** send event */
        broadcast(new TesteEnvio($message));
        /** return item */
        return response()->json($message);
    }
}
