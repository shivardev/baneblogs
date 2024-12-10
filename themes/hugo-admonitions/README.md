# hugo-admonitions

Simple admonitions for hugo.

Inspire from [mdbook-admonish](https://tommilligan.github.io/mdbook-admonish/)

## Overview of all admonitions

### Light Mode

![light-callout](./light-callout.png)

### Dark Mode

![dark-callout](./dark-callout.png)

## Installation

1. Inside the folder of your Hugo site, run:

```bash
git clone git@github.com:KKKZOZ/hugo-admonitions.git themes/hugo-admonitions

```

2. Add `hugo-admonitions` as the left-most element of the theme list variable in your site's or theme's configuration file `hugo.yam`l or `hugo.toml`.

    Example, with `hugo.yaml`:

    ```yaml
    theme: ["hugo-admonitions", "my-theme"]
    ```

    or, with `hugo.toml`,

    ```toml
    theme = ["hugo-admonitions", "my-theme"]
    ```

## Usage

Use the shortcode in this way:

```
{{< notice notify >}}
System notification: Your password will expire in 30 days.
{{< /notice >}}
```

![usage-1](./usage-1.png)

Or you can customize the title:

```go
{{< notice tip summary >}}
This is a summary!
{{< /notice >}}
```

![usage-2](./usage-2.png)
