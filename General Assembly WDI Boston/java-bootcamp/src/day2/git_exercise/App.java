package day2.git_exercise;

import java.io.BufferedReader;
import java.io.Console;
import java.io.IOException;
import java.io.InputStreamReader;

public class App {
	public static void main(String args[]) {
		// git shortlog -s -n
		// git log --pretty=format:"%aN %ae"
		
		try {
			Runtime r = Runtime.getRuntime();
			Process p = r.exec(new String[] {
				"git",
				"log",
				"--pretty=format:%aN %ae"
			});
			
			p.waitFor();
			
			BufferedReader b = new BufferedReader(new InputStreamReader(p.getInputStream()));
			String line = "";

			while ((line = b.readLine()) != null) {
			  System.out.println(line);
			}

			b.close();
		} catch (IOException | InterruptedException e) {
			e.printStackTrace();
		}
	}
}
