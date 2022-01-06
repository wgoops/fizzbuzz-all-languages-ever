
1/5/2022
A#: https://asharp.martincarlisle.com/

A# is a port of Ada. I don't know what that is. 

Excitingly enough, A# is integrated into visual studio 2005. I can barely contain myself. 
I have installed a# from a shady-looking sourceforge exe. It wanted to install onto C:\. 

It installed an empty directory with a 1kB. The file is titled, "Limitations.txt". Here is its contents: 
    Does not handle importing "ref bool", "ref int", "ref float"
    Does not handle representation clauses (to lay out the fields of a record, or specify the size of an object)

According to Apps and Features, the installation is 857 kB. 

I have uninstalled it. 

After rummaging around the A# sourceforge page, I've found a visual studio 2005 install. Lets try that bad boy on for size. 

Well it installs the integration. cool. but it unsurprisingly does not install visual studio 2005. As it turns out, other folks have already installed 2005. It doesn't work on Windows 10.

I have a feeling that this will be a consistent theme. 

So I used this skill I've been working on, called reading, and as it turns out that creepy sourceforge page probably has what I need in an executable within mgnat.zip. And if that fucks up then I suppose I'll try building it from source. If THAT fucks up then it's VM time. 

Well I figured out that Ada is a compiled language and so this A# code is also just gonna get compiled. So what I've presumably done is installed the compiler. Except, I've installed it wrong. I HAVE to install it to C:\ or it gets very very upset. 

Ah. It's not that. I just need to run mgnat.exe from .\mgnat and not .\mgnat\bin\

So, let's use that "reading" skill on Ada. 

God, this is actually a fascinating language. Look at the Wiki page, it's sick. Apparently it replace 450 languages for the DoD or something in the late 70s. As always, someone hates it. "the kindest thing that has been said about it is that there is probably a good small language screaming to get out from inside its vast, elephantine bulk." 

Anyways let's try to compile a hello-world program in this bad boy. 

```
    with Ada.Text_IO;
    use Ada.Text_IO;
    procedure Hello is
    begin
    Put_Line ("Hello, world!");
    end Hello;
```

And apparently if I was compiling via ADA, I'd name this hello.adb and run gnatmake hello.adb

Well, I need an intermediate language assembler for .net. Supposedly, this is installed with Visual Studio. will be kinda shocked if this works but we'll see 

ALRIGHT SO intermediate language assembler is available in the Visual Studio Developer Console, and the 2022 version of Visual Studio successfully compiled the bad boy. Unfortunately, it did not run. I got the following error: 

    System.IO.FileNotFoundException: Could not load file or assembly 'mgnatcs, Version=3.2.0.0, Culture=neutral, PublicKeyToken=713d0175fa8fbef8' or one of its dependencies. The system cannot find the file specified.

Now my guess here is that I need an earlier version of .net. the good news is that after running one of the test cases in ./tests, I was automatically prompted to download .net 3.0 or something. 

FUCK YEAH WE RAN THE STINKIN THING. 

So I either ran the A# Setup wrong, or this is how things are supposed to be done. I looked at the A# page online again (https://asharp.martincarlisle.com/) and ran step 5 to register the DLLs. 


    1. Add mgnat\bin to your PATH
    2. Add C:\WINDOWS\Microsoft.NET\Framework\v2.0.50727\ to your path (or wherever ILASM.exe is located).
    3. Add the following to your registry (modify to your unzip folder):

        HKLM\Software\Ada Core Technologies\MGNAT\Root = "c:\mgnat"
        HKLM\Software\Ada Core Technologies\MGNAT\Standard Libraries\DOTNET = "c:\mgnat\include"

    4. Run compile.bat in c:\mgnat\include (if using .NET DLLs)
    5. Finally, run register_mgnat.bat in the DLL folder to install the Ada libraries as .NET DLLs

I was able to successfully run hello.exe

After some research into ada, I was able to compile fizzbuzz.adb in visual studio 2022 and run fizzbuzz.exe
