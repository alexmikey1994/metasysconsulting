export default function Footer() {
  return (
    <footer className="bg-[#13051F] text-white px-6 py-10 text-sm">
      <div className="flex flex-col md:flex-row justify-between max-w-6xl mx-auto">
        <p>© {new Date().getFullYear()} Metasys Consulting. All rights reserved.</p>
        <div className="space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
