/* tslint:disable:no-redundant-jsdoc */
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../../environments/environment';
import {FiltroUsuarioDTO} from '../../../../shared/dto/filtro-usuario.dto';

/**
 * Classe de integração com o serviço de Usuário.
 */
@Injectable({
  providedIn: 'root'
})
export class ModeloArmaClientService {

  /**
   * Construtor da classe.
   *
   * @param http
   */
  constructor(private http: HttpClient) { }

  /**
   * Retorna a instância de Usuário conforme o 'id' informado.
   *
   * @param id
   * @return
   */
  public getById(id: number): Observable<any> {
    return this.http.get(`${environment.urlApi}/modeloarma/${id}`);
  }

  /**
   * Retorna o array de Usuários confome o filtro de pesquisa informado.
   *
   * @param filtroDTO
   */
  public getByFiltro(filtroDTO: FiltroUsuarioDTO): Observable<any> {
    return this.http.get(`${environment.urlApi}/modeloarma`, {
      params: filtroDTO.toParams()
    });
  }

  /**
   * Salva a instância de Usuário.
   *
   * @param modeloArma
   */
  public salvar(modeloArma: any): Observable<any> {
    let result: Observable<any> = null;

    if (modeloArma.id) {
      result = this.http.put(`${environment.urlApi}/modeloarma/${modeloArma.id}`, modeloArma);
    } else {
      console.log(modeloArma);
      result = this.http.post(`${environment.urlApi}/modeloarma/`, modeloArma);
    }
    return result;
  }

  /**
   * Salva a instância de Usuário.
   *
   * @param modeloArma
   */
  public remover(modeloArma: any): Observable<any> {
    let result: Observable<any> = null;

    result = this.http.delete(`${environment.urlApi}/modeloarma/${modeloArma.id}`, {});

    return result;
  }

}
