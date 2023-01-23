# Assignment: CRUD

In this assignment, you'll practice these concepts we've covered in class:

* CRUD
* Using Supabase

## Deliverables and Submitting

You know what you're doing by now! **Make a Copy from the Template**/**Clone**/**Commit**/**Push**/**Submit** :grin:

---

# Exercise 1: CRUD

The exercise today is simple.

*Re-do today's lesson*, but instead of keeping track of **Contacts**, keep track of another idea of your own choosing!

* Music
* Cat
* Dog

Whatever concept you choose, make sure it has 3-5 **fields**. For example:

* If you are managing a music collection, you might want to keep track of the following for each album:
   * Name (e.g. "Nevermind")
   * Artist (e.g. "Nirvana")
   * Year (e.g. 1991)

* If you're herding cats, you might keep track of the following for each cat:
   * Name (e.g. "Cora")
   * Breed (e.g. "Abyssinian" or "N/A")
   * Age (e.g. 3)

* You get the idea!

Create a table in **Supabase**, and hook it up to your app using the [Supabase library](https://github.com/supabase/supabase-js):

```zsh
npm install @supabase/supabase-js
```

and in your code:

```js
const supabase = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://??????.supabase.co';

const supabaseClient = supabase.createClient(SUPABASE_URL, process.env.SUPABASE_KEY);
```

Don't forget to keep your key secret in a `.env` file... You do remember how to do that right?

### :fire: IMPORTANT :fire:

* Make sure your API Key string is **not** in your Javascript source code!
* Make sure your `.env` file is not committed to your Git repo by using the `.gitignore` file!

---

# Super!

You did such a good job that even Superman has to give you props!

![](https://media.giphy.com/media/R8MIGe47XWx68/giphy.gif)
