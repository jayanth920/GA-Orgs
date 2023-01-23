get "/" do
end
post "/result" do
temp_in = @params(temperature).to_i
unit_in = @params(convert_from)
unit_out = @params(convert_to)
case unit_in
when "k"
temp_in = temp_in - 273.15
when "f"
temp_in = (temp_in - 32) * (5.0 / 9.0)
when "c"
temp_in = temp_in
case unit_out
when "k"
temp_out = temp_in + 273.15
when "f"
temp_out = temp_in * (9.0 / 5.0) + 32
when "c"
temp_out = temp_in
end
temperature = temp_out.round(1)
unit = unit_out.upcase
end
