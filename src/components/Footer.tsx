import { Home, Phone, Mail } from "lucide-react"
import { Link, useParams } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-cyan-500 rounded flex items-center justify-center">
                <Home className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">realty</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Thirty it matter enable become admire in giving. See resolved goodness felicity shy civility domestic had but.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="h-4 w-4" />
                <span>123-456-789</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <span>123 Elm Street, Hometown, NY 12345</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">What we do</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Name</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Easy steps</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Career</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Useful links</h3>
            <ul className="space-y-2">
              <li><Link href="/register" className="text-gray-400 hover:text-white transition-colors">Sign up</Link></li>
              <li><Link href="/login" className="text-gray-400 hover:text-white transition-colors">Sign in</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Agent detail</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Customer Stories</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Wish list</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Location map</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Faq</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="flex space-x-3">
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.20-1-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.5-1.93.07a4.28 0 0 0 4 2.98 8.521 8.521 0 0 0 1-5-1.84 0 0 0 0 c0-.19 0-.37-.01-.56.84-.60 1.56-1.336 2.14-2.23z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.36h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.53c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.36h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
              <div className="flex space-x-2">
                <div className="bg-gray-800 rounded-lg px-3 py-2 flex items-center space-x-2">
                  <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
                    <span className="text-white text-xs">3</span>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">GET IT ON</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </div>
                <div className="bg-gray-800 rounded-lg px-3 py-2 flex items-center space-x-2">
                  <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                    <span className="text-black text-xs">🍎</span>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-gray-400 text-sm">©2021 Realty. All rights reserved</div>
          </div>
        </div>
      </div>
    </footer>
  )
}