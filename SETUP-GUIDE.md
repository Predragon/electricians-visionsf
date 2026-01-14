# VisionSF Hub - Setup Guide

Complete these 3 steps to finish the forms, calendar, and email setup.

---

## 1. Cloudflare Email Routing (hello@visionsf.com)

Since visionsf.com DNS is already on Cloudflare, email routing is quick:

### Steps in Cloudflare Dashboard:

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Select **visionsf.com** domain
3. Navigate to **Email** → **Email Routing**
4. Click **Get Started** (if first time) or **Add Destination**
5. Add your destination email:
   - Click **Add destination address**
   - Enter your Gmail address
   - Click **Save** and verify via email link sent to Gmail
6. Create the catch-all or specific route:
   - Go to **Routing Rules** tab
   - Click **Create address**
   - Custom address: `hello`
   - Action: **Send to an email** → select your verified Gmail
   - Click **Save**

### Verify Setup:

After setup, the Email Routing page should show:
```
hello@visionsf.com → your-email@gmail.com (Active)
```

DNS records are auto-configured by Cloudflare.

---

## 2. Formspree (Contact Form Backend)

Formspree handles form submissions and emails them to you.

### Steps:

1. Go to [formspree.io](https://formspree.io) and sign up (free tier: 50 submissions/month)
2. Click **New Form**
3. Name it: `VisionSF Contact`
4. Email to send submissions: use `hello@visionsf.com` (after step 1 is done)
5. Copy your **Form ID** (looks like: `xpwzabcd`)
6. Update `src/components/Contact.tsx` line 57:
   ```tsx
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```
   Replace `YOUR_FORM_ID` with your actual ID (e.g., `xpwzabcd`)

### Optional Formspree Settings:

- Enable **reCAPTCHA** in Formspree dashboard for spam protection
- Set up **Thank you page** redirect if preferred
- Enable **Email notifications** to get instant alerts

---

## 3. Cal.com (Calendar Booking)

Cal.com is open-source scheduling, free for personal use.

### Steps:

1. Go to [cal.com](https://cal.com) and sign up
2. Complete onboarding:
   - Set your timezone (America/Los_Angeles for SF)
   - Connect your calendar (Google Calendar recommended)
   - Set availability (e.g., Mon-Fri 9am-5pm PST)
3. Create an event type:
   - Name: `Free Consultation`
   - Duration: 30 minutes
   - Description: "Discuss your project with VisionSF"
4. Copy your booking link (format: `https://cal.com/YOUR_USERNAME/free-consultation`)
5. Update `src/components/Contact.tsx`:
   - Line 210: Replace `href="#"` with your Cal.com link
   - Line 242: Replace `href="#"` with your Cal.com link

### Example Cal.com Link:
```
https://cal.com/visionsf/free-consultation
```

---

## Quick Checklist

- [ ] Cloudflare Email Routing configured
- [ ] Email forwarding verified (test by sending to hello@visionsf.com)
- [ ] Formspree account created
- [ ] Formspree form ID added to Contact.tsx
- [ ] Cal.com account created
- [ ] Cal.com event type created
- [ ] Cal.com links added to Contact.tsx
- [ ] Test form submission
- [ ] Test calendar booking

---

## After Setup - Deploy

```bash
npm run build
git add .
git commit -m "feat: Configure form, calendar, and email"
git push
```

Cloudflare Pages will auto-deploy on push.

---

## Support

- Cloudflare Email: https://developers.cloudflare.com/email-routing/
- Formspree Docs: https://formspree.io/docs
- Cal.com Docs: https://cal.com/docs
