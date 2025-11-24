import { Label } from "@/components/ui/Typography";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-20 px-6 md:px-12">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <div className="text-lg font-bold tracking-tighter text-white">
            Dailymotion <span className="font-light text-white/60">Business</span>
          </div>
          <p className="text-sm text-mist-white/40">
            The video marketing platform for the modern era. Sovereign, transparent, and powerful.
          </p>
        </div>
        
        <div>
          <Label className="mb-4 block text-xs">Platform</Label>
          <ul className="space-y-2 text-sm text-mist-white/60">
            <li><a href="#" className="hover:text-white">Monetization</a></li>
            <li><a href="#" className="hover:text-white">Player Technology</a></li>
            <li><a href="#" className="hover:text-white">Video Advertising</a></li>
            <li><a href="#" className="hover:text-white">Live Streaming</a></li>
          </ul>
        </div>

        <div>
          <Label className="mb-4 block text-xs">Company</Label>
          <ul className="space-y-2 text-sm text-mist-white/60">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Press</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <Label className="mb-4 block text-xs">Legal</Label>
          <ul className="space-y-2 text-sm text-mist-white/60">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-[1600px] mx-auto mt-20 pt-8 border-t border-white/5 text-xs text-mist-white/20 flex justify-between items-center">
         <p>© 2024 Dailymotion. All rights reserved.</p>
         <div className="flex gap-4">
            <span>Paris</span>
            <span>New York</span>
            <span>Singapore</span>
         </div>
      </div>
    </footer>
  );
}

