## Commads

### component

This will create a folder in the current working directory with the provided component name and generate component files.

```bash
$ rg component <type> <componentName> [options]
```

- **Arguments:**
  - `type` - the type of component
    - acceptable values:
      - `rfc` - react functional component
      - `rcc` - react class component
      - `rccp` - react class component with proptypes
      - `rfcp` - react functional component with proptypes
      - `rafc` - react arrow functional component
      - `rafcp` - react arrow functional component with proptypes
      - `rafcredux` - react arrow functional component with connected redux
      - `rafcreduxp` - react arrow functional component with connected redux & proptypes
      - `rfcredux` - react functional component with connected redux
      - `rfcreduxp` - react functional component with connected redux & proptypes
      - **more types coming soon**
  - `componentName` - component name in kebab-case, will be converted to PascalCase
    - acceptable values:
      - any type as long as it is kebab-case
- **Options:**
  - `--css` - css extension type
    - acceptable values:
      - `css` - a general css file with a .css extension
      - `less` - a general css file with a .less extension
      - `scss` - a general css file with a .scss extension
    - default value: `css`
  - `--cssType` - type of css file
    - acceptable values:
      - `normal` - a general css file
      - `modular` - modular css files to allow scoping of css
  - `--test` - decides if you want to generate a test file along with the component files.
    - acceptable values:
      - `true`
      - `false`
    - default value: `false`
  - `--testExt` - test file extension type
    - acceptable values:
      - `test-js`
      - `test-tsx`
      - `spec-js`
      - `spec-tsx`
    - default value: `test-js`
  - `--cwd` - pass a string if you want to change the current working directory.
    - acceptable values:
      - string
  - `--ext` - component file extension type
    - acceptable values:
      - `js`
      - `jsx`
      - `tsx`
    - default value: `js`


### route

This will generate a react component named PrivateRoute in the current working directory and the options file.

```bash
$ rg route <type> [options]
```

- **Arguments:**
  - `type` - the type of component
    - acceptable values:
      - `pr` - private route component
      - **more types coming soon**
- **Options:**
  - `--test` - decides if you want to generate a test file along with the private route component file.
    - acceptable values:
      - `true`
      - `false`
    - default value: `false`
  - `--testExt` - test file extension type
    - acceptable values:
      - `test-js`
      - `spec-js`
    - default value: `test-js`
  - `--cwd` - pass a string if you want to change the current working directory.
    - acceptable values:
      - string
  - `--ext` - component file extension type
    - acceptable values:
      - `js`
      - `jsx`
    - default value: `js`
