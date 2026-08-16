<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactFormRequest;
use App\Mail\ContactFormMail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;

class ContactController extends Controller
{
    public function show()
    {
        return view('contact.index');
    }

    public function submit(ContactFormRequest $request)
    {
        $data = $request->validated();

        try {
            Mail::to(config('mail.contact_to', 'ghadacareer75@outlook.com'))
                ->send(new ContactFormMail(
                    $data['name'],
                    $data['email'],
                    $data['subject'],
                    $data['message'],
                ));
        } catch (\Throwable $e) {
            Log::error('Contact form email failed to send.', ['error' => $e->getMessage()]);

            return back()
                ->withInput()
                ->withErrors(['message' => 'Sorry, your message could not be sent right now. Please try again later or email me directly.']);
        }

        return back()->with('status', 'Thanks! Your message has been sent — I will get back to you soon.');
    }
}
