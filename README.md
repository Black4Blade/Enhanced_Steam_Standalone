**/!\ DO NOT INSTALL ANY VERSION OF ENHANCED STEAM STANDALONE FROM UNKNOWN SOURCES /!\**

Enhanced Steam Standalone
=============

Enhanced Steam Standalone, a standalone Windows desktop version of the [Enhanced Steam](https://github.com/jshackles/Enhanced_Steam) extension that works with any html-css-and-js-aware http client that respects the system-wide proxy settings (including the Steam client).

Installation
------------

1. Clone this repository.
2. Launch Enhanced Steam.exe
3. Browse Steam with new features.

Principle
---------

This program creates a local passthrough proxy that injects some javascript into the Steam store and community pages, so they will be enhanced.  When the proxy detects a response matching certain criteria (html response from store.steampowered.com or steamcommunity.com with a proper HEAD tag) then the proxy will insert the code from enhancedsteam.js and the CSS from enhancedsteam.css in the program directory.  Your browser will receive this request as if it had not been altered and evaluate the code.

License
-----
Enhanced Steam is Copyright 2012-2014 Jason Shackles. This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation. A copy of the GNU General Public License can be found at http://www.gnu.org/licenses/.

Portions of this program Copyright 2013-2014 Telerik Software.  All rights reserved.