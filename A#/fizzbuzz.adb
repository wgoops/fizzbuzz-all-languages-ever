with Ada.Text_IO; use Ada.Text_IO; 
with Ada.Integer_Text_IO; use Ada.Integer_Text_IO;

procedure fizzbuzz is
	-- variable declaration 
	I: integer := 1;
begin 
	for I in 1 .. 100 loop 
		if I mod 3 = 0 then 
			Put("Fizz");
		end if; 

		if I mod 5 = 0 then
			Put("Buzz");
		end if; 

		if I mod 3 /= 0 and I mod 5 /= 0 then 
			Put(I, 1);
			Put_Line("");
		else
			Put_Line("");

		end if;
	end loop;
end fizzbuzz;