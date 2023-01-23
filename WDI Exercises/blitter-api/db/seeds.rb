Comment.destroy_all
Bleet.destroy_all
bleets = Bleet.create([
  {content:"Swift will help you like being a show that implements for Twiddle and tmux keybinding support! two q's.", likes: 3},
  {content:"Is there a hack and tell meetup in DC?", likes: 2},
  {content:"Webpack / gulp etc are good for when you have to code but don't want to. \"I'm working I swear\"", likes: 0}
])
Comment.create([
  {content: "Wait, what?!", bleet: bleets[0]},
  {content: "Yes, there is!", bleet: bleets[1]}
])

