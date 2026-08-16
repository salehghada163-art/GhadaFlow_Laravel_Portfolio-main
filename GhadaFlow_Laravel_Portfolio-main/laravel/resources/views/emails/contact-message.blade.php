<!doctype html>
<html>
<head><meta charset="utf-8"><title>New Portfolio Contact Message</title></head>
<body style="font-family: -apple-system, Segoe UI, Arial, sans-serif; background:#f6f7fb; padding:32px; color:#14161f;">
<div style="max-width:560px;margin:auto;background:#ffffff;border-radius:16px;padding:32px;border:1px solid #e5e7f0;">
<h2 style="margin-top:0;">New message from GhadaFlow Portfolio</h2>
<p><strong>Name:</strong> {{ $contactName }}</p>
<p><strong>Email:</strong> {{ $contactEmail }}</p>
<p><strong>Subject:</strong> {{ $contactSubject }}</p>
<p><strong>Message:</strong></p>
<p style="white-space:pre-line;background:#f2f3f9;padding:16px;border-radius:10px;">{{ $contactMessage }}</p>
<hr style="border:none;border-top:1px solid #e5e7f0;margin:24px 0;">
<p style="font-size:12px;color:#5b6270;">Sent from the Contact Form on the GhadaFlow Portfolio.</p>
</div>
</body>
</html>
