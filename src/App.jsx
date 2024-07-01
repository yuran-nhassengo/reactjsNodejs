import './index.css'
import './App.css'
import './sidebar.css'
import './main.css'

import { Notes } from './components/Notes'

export const App = () => {


  return (
    <div id="app">
    <aside>
      <strong>Caderno de Notas</strong>

      <form >


        <div className="input-block">
          <label htmlFor="title">Titulo da Anotacao</label>
          <input />
        </div>

        <div className="input-block">
          <label htmlFor="nota">Anotacoes</label>
          <textarea></textarea>
        </div>

        <button type="submit">Salvar</button>
      </form>
      
    </aside>

    <main>
        <ul>
          <Notes/>
        </ul>
      </main>
    </div>
  )
}

