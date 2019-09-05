import React from 'react';

class App extends React.Component {

  state = {
    nome: '',
    sexo: 'm',
    altura: '',
    resposta: ''
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    if (this.state.nome === "" || this.state.altura === "") {
      alert("Informe nome e altura")
      return
    }

    let peso
    if (this.state.sexo === "m") {
      peso = 22 * Math.pow(Number(this.state.altura), 2)
    } else {
      peso = 21 * Math.pow(Number(this.state.altura), 2)
    }

    this.setState({ resposta: this.state.nome + '! Seu Peso ideal é: ' + peso.toFixed(3) + ' Kg'})
  }

  limpar = () => {
    this.setState({
      nome: '',
      altura: '',
      sexo: 'm',
      resposta: '',
    })
  }

  render() {
    return (
      <div className="container">
        <div className="alert alert-success" role="alert">
          <h4 className="alert-heading">Cálculo do Peso Ideal - Centro de Nutrição Avenida</h4>
          <p>Manter o peso é pura saúde...</p>
          <hr />
          <p>Informe os seus dados e ...</p>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <img src="nutri.jpg" className="img-fluid rounded" alt="Nutricionista" />
          </div>
          <div className="col-sm-8">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Nome:</label>
                <input type="text" className="form-control" name="nome" placeholder="Informe seu nome" onChange={this.handleChange} value={this.state.nome} autoFocus />
              </div>
              <div className="form-group">
                <label>Altura:</label>
                <input type="text" className="form-control" name="altura" placeholder="Altura (1.65, por exemplo)" onChange={this.handleChange} value={this.state.altura} />
              </div>
              <div className="form-check">
                <label className="form-check-label">
                  <input className="form-check-input" type="radio" name="sexo" value="m" checked={this.state.sexo === "m"} onChange={this.handleChange} />
                  Masculino
                </label>
              </div>
              <div className="form-check">
                <label className="form-check-label">
                  <input className="form-check-input" type="radio" name="sexo" value="f" checked={this.state.sexo === "f"} onChange={this.handleChange} />
                  Feminino
                </label>
              </div>
              <button type="submit" className="btn btn-primary">Calcular</button>&nbsp;&nbsp;
              <button type="reset" className="btn btn-danger" onClick={this.limpar}>Limpar</button>
            </form>
            <h4 className="mt-3"><i>{this.state.resposta}</i></h4>
          </div>
        </div>
      </div>
    )
  }
}

export default App