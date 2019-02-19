<p align="center">
  <img src="https://pbs.twimg.com/media/DyKPpD7UwAAVKyH.jpg:large" height="200px"/>
  <br><br>
  <b>Silly React hook for CSS</b>
  <br><br/>
  <a href="https://codesandbox.io/s/5xrrwp8nlp">Demo on CodeSandbox</a>
</p>

&nbsp;

#### install

```
npm install @sid/use-css
```

&nbsp;

#### usage

```js
import useCSS from 'use-css'

function Oopsy(props) {
  const className = useCSS(`
    font-size: 21px;
    font-style: italic;
    color: ${props.color};
  `)

  return <div className={className}>because why not?</div>
}

render(<Oopsy color="green" />)
```

&nbsp;

#### but why?

funsies

#### like it?

:star: this repo

&nbsp;

#### license

MIT © [siddharthkp](https://github.com/siddharthkp)
