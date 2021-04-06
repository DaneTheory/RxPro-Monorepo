import foo from '@devbro/foo'
import Bar from '@devbro/bar'


export default function Home() {
  return (
    <div>
      Imported modules from another workspace:
      <pre>{foo}</pre>
      <Bar />
    </div>
  )
}
