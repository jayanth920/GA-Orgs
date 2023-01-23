Rails.application.routes.draw do
  root to: "forms#index"
  get "/forms", to: "forms#index"
  post "/forms", to: "forms#post"
  get "/forms/option_and_select", to: "forms#option_and_select"
  get "/forms/textarea_and_input_type_hidden", to: "forms#textarea_and_input_type_hidden"
  get "/forms/input_text_number_password", to: "forms#input_text_number_password"
  get "/forms/checkbox", to: "forms#checkbox"
  get "/forms/radio", to: "forms#radio"
  get "/forms/date", to: "forms#date"
  resources :cats
end
