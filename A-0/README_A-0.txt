Language: A-0 (basically just a windows compiler for Ada)
OS: Windows 10
Emulator: UNIVAC I from Historic Simulations (http://www.historicsimulations.com/univac.html) or Mirror (https://web.archive.org/web/20210614122019/http://www.historicsimulations.com/univac.html) 

Installation: 
    Univac.exe should work out of the box. We will run our code in this emulator.


Running A-0 scripts: 

    Prerequisites: 
        - Downloaded Univac 1 emulator from http://www.historicsimulations.com/univac.html  
        - Univac.exe is running. 
        - Script is no more than 60 lines (unless you want to get fancy and learn how to load more than 60
            lines into memory.)

    Note: steps 3-9 must be performed every time the A-0 script is ran. Additionally, the first script ran in a 
        given instance of the executable should execute steps 1-5 twice as sometimes the memory gets garbled 
        from a read for no real reason.  

    1. Navigate to the "Tape" tab. 
    2. Either copy-paste the code into the "Tape" tab, or Load a .tap file. 
    3. On the right, click "Mount". 
    4. "Pull" the following levers by clicking. Levers are listed from left to right: 
        - Stop 
        - Clear CY
        - Clear PC and pc 
        - Clear C
        - SCI CR
        - Clear I and O 
    5. "Pull" the Initial Read Lever. 
    6. (Optional) To ensure that you have successfully loaded the first 60 lines of the script, click the 
        "Memory" tab. You should see your A-0 script loaded into memory. 
    7. (Optional) Click on the Debug tab. Ensure "Enable Debug" is checked. Clear "Enable Debug" for 
        ease of troubleshooting.
    8. (Optional) Clear the teleprinter by clicking "Clear Teleprinter" on the bottom left. 
    9. To run the program, click Start Bar 

Writing A-0 scripts:

    Some background: 

    A-0 was punched onto punch cards. From the punch cards, it would be etched onto magnetic tape 
        (similar to a large cassette player). This magnetic tape would be mounted onto some 
        crazy machinery, and the UNIVAC would perform an initial read of the first sixty "lines of code". 

    To be more precise: When we write A-0, we're literally writing opcode, signed ints, or alphanumeric data 
        into memory. Each line of memory is read (and if an opcode, executed) by the UNIVAC sequentially, 
        starting from 0. It will continue reading memory until it executes a Halt command from memory, or 
        until the operator pulls the "stop" lever. 

    It is strongly recommended to read Univac.txt and/or parts of the UNIVAC 1 Operating Manual PDF before 
        writing in A-0. I've provided some examples for sanity; Count.tap came with the .exe, but I found 
        it to be a bit confusing.  

    I would also strongly recommend looking into the history of this thing, because if you are the sort of 
        freak looking at this document, then you're the sort of person who would probably find the history 
        and people surrounding this machine fascinating; I know I did. 
    
    Some words of warning: 
        - Numbers are specified in base-10. 

        - If you plan on printing lines, I would recommend offsetting numbers by one zero on the righthand side. 
            Otherwise, they are a pain to print and you must take bitshifts into account. This would 
            normally not be a big deal, but the language was written in 1951 and you'll probably have 
            other things to worry about. 

            Example: a "1" would be written as 000000000010, while a 1 to print would be written as 
            00000000001\r
        
        - Allocate a line of memory specifically for teleprinting. It makes math operations easier. 
        
        - Do not add a carriage return to a numeric value on which you are performing math operations until 
            you plan on printing it. Print it by adding it to the line of memory dedicated to teleprinting. 
        
        - Each line of memory can contain two instruction sets. Keep commands on the same line as much as possible
            to hasten memory address refactoring and to avoid having to load more than 60 lines into memory.  
        
        - Pulling the three levers under "Decimal Zero" towards the top-right is good luck. 
        
        - Jump commands (U, Q, T) NEED to be the second command in a given line of memory. 
        
        - Leave your code uncommented at your own risk. 
        
        - In comments, do not represent a memory address with a specific memory number. Instead, 
            label the memory address in the comment, and refer to it by said label. This has no 
            impact to the program and is solely for the programmer's benefit. 
        
        - For some awful, unknown reason, every 10th memory address ([009], [019], [029], etc.) MUST 
            have an unconditional jump command to the next memory address. For example: 
            [009] 000 U00 010

            If this isn't performed, the UNIVAC emulator will skip something like 8 lines ahead, run three lines, 
            skip another lines, and so on and so forth. 

        - Comparisons with zeros can be a bit weird. -0 and 0 are not considered to be the same thing. When 
            subtracting, 5-5 would end up equaling -0, which was NOT equal to 0. Inequalities might have also 
            had a quirk, but I honestly forget and just decided to be a bit superstitous and use two different 
            zero values. 

        - I had a... weird... issue with the L command. When comparing positive numbers, it worked fine. 
            When comparing negative numbers, it didn't really work. I might just be dumb though. 

        - Had another weird issue with divide. It would overflow when the numerator was larger than the 
            denominator. I ended up just writing my own divide program because I needed the practice anyway. 
        
        - Spreadsheets are the cowards way out




