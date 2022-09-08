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
   * @param modeloArma
   */
  constructor(
    public modeloArma?: string,
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

    if (this.modeloArma) {
      params = params.append('modeloArma', this.modeloArma);
    }

    return params;
  }
}
