Language: A# (basically just a windows compiler for Ada)
OS: Windows 10


Installation: 

1. Install Visual Studio Community Edition 2022. Other versions may be acceptable. 
2. extract mgnat.zip
3. run asharp-setup20060606.exe. Select the folder to which you extracted mgnat.zip (not sure if this is mgnat\ or the folder ABOVE mgnat\)
4. Open Visual Studio Community Edition 2022 as an administrator. Navigate to mgnat\ in the developer's console. 
5. Run dll\register_mgnat.bat

You can now build .adb files. Do so by running \bin\mgnatmake.exe <FILE>, where <FILE> is your .adb
webpage_backup should provide the manual installation procedure, or go to https://asharp.martincarlisle.com/