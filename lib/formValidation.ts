/** Returns an error string, or "" when valid. */

export function validateName(v: string): string {
  const t = v.trim();
  if (!t) return "Full name is required";
  if (t.length < 2) return "Name must be at least 2 characters";
  if (/\d/.test(t)) return "Name should not contain numbers";
  return "";
}

export function validateEmail(v: string): string {
  const t = v.trim();
  if (!t) return "Email address is required";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)) return "Enter a valid email address";
  return "";
}

/** Phone is optional — only validates format when a value is present. */
export function validatePhone(v: string): string {
  const t = v.trim();
  if (!t) return "";
  const digits = t.replace(/\D/g, "");
  if (digits.length < 7) return "Enter a valid phone number";
  if (digits.length > 15) return "Phone number is too long";
  return "";
}

export function validateRequired(v: string, label: string): string {
  return v.trim() ? "" : `${label} is required`;
}

/** Message with an optional minimum-length guard (default 10 chars). */
export function validateMessage(v: string, minLength = 10): string {
  const t = v.trim();
  if (!t) return "Please tell us about your project";
  if (t.length < minLength) return `Message must be at least ${minLength} characters`;
  return "";
}
