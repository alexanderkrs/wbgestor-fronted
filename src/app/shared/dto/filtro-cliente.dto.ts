/* tslint:disable:no-redundant-jsdoc */
import { HttpParams } from '@angular/common/http';

/**
 * Classe de trânsferencia com os parâmetros utilizados em filtros de pesquisa de Cliente.
 *
 * @author Guiliano Rangel (UEG)
 */
export class FiltroClienteDTO {

  /**
   * Construtor da classe.
   *
   * @param nome
   */
  constructor(
    public nome?: string
  ) { }

  /**
   * Transforma o JSON do parâmetro em um objeto do modelo de dominio da aplicação.
   *
   * @param jsonData
   */
  static fromJson(jsonData: any): FiltroClienteDTO {
    return Object.assign(new FiltroClienteDTO(), jsonData);
  }

  /**
   * Retorna uma nova instancia de FiltroDTO
   */
  static getInstace(): FiltroClienteDTO {
    return new FiltroClienteDTO();
  }

  /**
   * Retorna a instância de HttpParams considerando os parâmetros informados.
   */
  public toParams(): HttpParams {
    let params = new HttpParams();

    if (this.nome) {
      params = params.append('nome', this.nome);
    }
    return params;
  }
}
