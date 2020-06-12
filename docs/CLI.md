## Commads

### component

This will create a folder in the current working directory with the provided component name and generate component files.

```bash
$ rg component <type> <componentName> [css] [test]
```

- **Arguments:** 
  - `type` - the type of component
    - acceptable values:
      - `rfc` - react functional component
      - `rcc` - react class component
      - `rfcp` - react functional component with proptypes
      - **more types coming soon**
  - ```componentName``` - component name in kebab-case, will be converted to PascalCase
    - acceptable values:
      - any type as long as it is kebab-case
- **Options:**
    - ```--css``` - type of css file
      - acceptable values:
        - ```normal``` - a general css file
        - ```modular``` - modular css files to allow scoping of css
      - default value: ```normal```
    - ```--test``` - decides if you want to generate a test file along with the component files.
      - acceptable values:
        - ```true```
        - ```false```
      - default value: ```false```