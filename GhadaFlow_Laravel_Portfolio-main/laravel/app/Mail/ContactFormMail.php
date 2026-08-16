<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ContactFormMail extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(
        public string $contactName,
        public string $contactEmail,
        public string $contactSubject,
        public string $contactMessage,
    ) {
    }

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'GhadaFlow Portfolio — ' . $this->contactSubject,
            replyTo: [$this->contactEmail],
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.contact-message',
        );
    }
}
