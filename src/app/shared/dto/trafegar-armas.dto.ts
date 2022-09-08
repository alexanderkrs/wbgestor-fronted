/* tslint:disable:no-redundant-jsdoc */
import { HttpParams } from '@angular/common/http';

/**
 * Classe de trânsferencia com os parâmetros utilizados em filtros de pesquisa de Amigo.
 *
 * @author Guiliano Rangel (UEG)
 */
export class FiltroTrafegarArmasDTO {

  /**
   * Construtor da classe.
   *
   * @param serie
   */
  constructor(
    public serie?: string,
  ) { }

  /**
   * Transforma o JSON do parâmetro em um objeto do modelo de dominio da aplicação.
   *
   * @param jsonData
   */
  static fromJson(jsonData: any): FiltroTrafegarArmasDTO {
    return Object.assign(new FiltroTrafegarArmasDTO(), jsonData);
  }

  /**
   * Retorna uma nova instancia de FiltroDTO
   */
  static getInstace(): FiltroTrafegarArmasDTO {
    return new FiltroTrafegarArmasDTO();
  }

  /**
   * Retorna a instância de HttpParams considerando os parâmetros informados.
   */
  public toParams(): HttpParams {
    let params = new HttpParams();

    if (this.serie) {
      params = params.append('modeloArma', this.serie);
    }

    return params;
  }
}
