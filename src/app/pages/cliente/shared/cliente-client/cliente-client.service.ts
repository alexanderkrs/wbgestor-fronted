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
export class ClienteClientService {

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
    return this.http.get(`${environment.urlApi}/cliente/${id}`);
  }

  /**
   * Retorna o array de Usuários confome o filtro de pesquisa informado.
   *
   * @param filtroDTO
   */
  public getByFiltro(filtroDTO: FiltroUsuarioDTO): Observable<any> {
    return this.http.get(`${environment.urlApi}/cliente`, {
      params: filtroDTO.toParams()
    });
  }

  /**
   * Salva a instância de Usuário.
   *
   * @param usuario
   */
  public salvar(usuario: any): Observable<any> {
    let result: Observable<any> = null;

    if (usuario.id) {
      result = this.http.put(`${environment.urlApi}/cliente/${usuario.id}`, usuario);
    } else {
      result = this.http.post(`${environment.urlApi}/cliente/`, usuario);
    }
    return result;
  }

  /**
   * Salva a instância de Usuário.
   *
   * @param cliente
   */
  public desativar(cliente: any): Observable<any> {
    let result: Observable<any> = null;

    result = this.http.put(`${environment.urlApi}/cliente/inativo/${cliente.id}`, {});

    return result;
  }

}
