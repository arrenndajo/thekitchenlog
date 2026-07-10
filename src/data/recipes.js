export const recipes = [
  { name: "Aloo Paratha", date: "Feb 3, 2026", img: "/aloo_paratha.jpg" },
  { name: "Aloo Sabzi & Paratha", date: "Dec 30, 2025", img: "/aloo_sabzi_paratha.jpg" },
  { name: "Avocado Toast", date: "May 28, 2026", img: "/avocado_toast.jpg" },
  { name: "Besan Chilla", date: "Dec 29, 2025", img: "/besan_chilla.jpg" },
  { name: "Bhindi Fry & Thepla", date: "Jan 28, 2026", img: "/bhindi_fry_thepla.jpg" },
  { name: "Dal Rice & Papad", date: "Jan 31, 2026", img: "/dal_rice_papad.jpg" },
  { name: "Dosa", date: "Dec 20, 2025", img: "/dosa.jpg" },
  { name: "Kadhai Paneer", date: "Jun 21, 2026", img: "/kadhai_paneer.jpg" },
  { name: "Maggi", date: "Dec 16, 2025", img: "/maggi.jpg", caption: "First meal in the US after landing in PHX" },
  { name: "Misal Pav", date: "Dec 26, 2025", img: "/misal_pav.jpg" },
  { name: "Mix Veg Sabzi & Paratha", date: "Dec 23, 2025", img: "/mix_veg.jpg" },
  { name: "Paneer Bhurji", date: "Jul 4, 2026", img: "/paneer_bhurji.jpg" },
  { name: "Peanut Butter Oats & Banana", date: "Feb 17, 2026", img: "/peanut_butter_oats_banana.jpg" },
  { name: "Poha", date: "Jun 13, 2026", img: "/poha.jpg" },
  { name: "Rava Dosa", date: "Jul 9, 2026", img: "/rava_dosa.jpg" },  
  { name: "Salad", date: "Dec 30, 2025", img: "/salad.jpg" },
  { name: "Soyabean Sabzi & Thepla", date: "Feb 9, 2026", img: "/soyabean_sabzi_thepla.jpg" },
  { name: "Toast Sandwich", date: "Feb 1, 2026", img: "/toast_sandwich.jpg" },
  { name: "Upma", date: "DEc 18, 2025", img: "/upma.jpg" },
  { name: "Onion Uttapam", date: "Dec 22, 2025", img: "/uttapam.jpg" },
  { name: "Veg Fried Rice", date: "Dec 29, 2025", img: "/veg_fried_rice.jpg" },
  { name: "White Sauce Pasta", date: "Jun 19, 2026", img: "/white_sauce_pasta.jpg" },  
];

export function formatDate(d) {
  const parsed = new Date(d);
  if (isNaN(parsed)) return d;
  return parsed.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
