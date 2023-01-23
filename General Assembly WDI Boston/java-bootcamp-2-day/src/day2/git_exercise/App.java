package day2.git_exercise;

import java.io.BufferedReader;
import java.io.Console;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;

public class App {
	public static void main(String args[]) {
		// git shortlog -s -n
		// git log --pretty=format:"%ae"
		
		try {
			Runtime r = Runtime.getRuntime();
			Process p = r.exec(new String[] {
				"git",
				"log",
				"--pretty=format:%ae"
			});
			
			p.waitFor();
			
			BufferedReader b = new BufferedReader(new InputStreamReader(p.getInputStream()));
			String line = "";
			
			ArrayList<String> lines = new ArrayList<String>();

			while ((line = b.readLine()) != null) {
			  lines.add(line);
			}

			b.close();
			
			System.out.println(lines);
		} catch (IOException | InterruptedException e) {
			e.printStackTrace();
		}
	}
}
