[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Demo API for Cross-Site Scripting (XSS) & Code Injection

This API follows Rails-like conventions for organizing controller and model
code, and has a routing layer which is similar to the Rails routing DSL.

## Dependencies

Install with `npm install`.

-   [`express`](http://expressjs.com/)
-   [`mongoose`](http://mongoosejs.com/)

## Installation

1.  Set a SECRET_KEY in the environment.
    ```sh
    echo SECRET_KEY=$(openssl rand -base64 66 | tr -d '\n') >>.env
    ```

1.  Run the API server with `grunt server`.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
