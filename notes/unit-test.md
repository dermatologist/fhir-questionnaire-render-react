* https://www.smashingmagazine.com/2020/06/practical-guide-testing-react-applications-jest/
* https://github.com/vankop/jsoneditor-react/issues/24

I had this issue while running Jest tests with my React project setup with react-scripts@3.3.1. Adding identity-obj-proxy as devDependency and adding the following to my Jest config resolved the issue for me:
```
"jest": {
    "transformIgnorePatterns": [
      "node_modules/(?!(jsoneditor-react/))"
    ],
    "moduleNameMapper": {
      "\\.css$": "identity-obj-proxy"
    }
  },
```