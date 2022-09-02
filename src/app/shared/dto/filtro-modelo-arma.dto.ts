/* tslint:disable:no-redundant-jsdoc */
import { HttpParams } from '@angular/common/http';

/**
 * Classe de trânsferencia com os parâmetros utilizados em filtros de pesquisa de Tipo Amigo.
 *
 * @author Guiliano Rangel (UEG)
 */
export class FiltroModeloArmaDTO {

  /**
   * Construtor da classe.
   *
   * @param modelo
   */
  constructor(
    public modelo?: string
  ) { }

  /**
   * Transforma o JSON do parâmetro em um objeto do modelo de dominio da aplicação.
   *
   * @param jsonData
   */
  static fromJson(jsonData: any): FiltroModeloArmaDTO {
    return Object.assign(new FiltroModeloArmaDTO(), jsonData);
  }

  /**
   * Retorna uma nova instancia de FiltroDTO
   */
  static getInstace(): FiltroModeloArmaDTO {
    return new FiltroModeloArmaDTO();
  }

  /**
   * Retorna a instância de HttpParams considerando os parâmetros informados.
   */
  public toParams(): HttpParams {
    let params = new HttpParams();

    if (this.modelo) {
      params = params.append('modelo', this.modelo);
    }
    return params;
  }
}
