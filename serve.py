#!/usr/bin/env python3
"""Simple SPA-aware HTTP server for Vite-built apps.
Serves static files from dist/ and falls back to index.html for SPA routes.
"""

import http.server
import os
import socketserver

PORT = 9000
DIRECTORY = os.path.join(os.path.dirname(os.path.abspath(__file__)), "dist")

class SPAHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_GET(self):
        # Only fall back to SPA index.html for non-existent paths
        # Let static files and directories with index.html be served normally
        path = self.path.lstrip('/')
        if path == '':
            path = 'index.html'
        file_path = os.path.join(DIRECTORY, path)

        # If it's a directory with index.html, let default handler serve it
        if os.path.isdir(file_path):
            index_file = os.path.join(file_path, 'index.html')
            if os.path.exists(index_file):
                return super().do_GET()

        # If file doesn't exist, serve SPA index.html
        if not os.path.exists(file_path):
            self.path = '/index.html'

        return super().do_GET()

    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        super().end_headers()

if __name__ == '__main__':
    with socketserver.TCPServer(("", PORT), SPAHandler) as httpd:
        print(f"Server running at http://localhost:{PORT}/")
        print(f"Press Ctrl+C to stop")
        httpd.serve_forever()
