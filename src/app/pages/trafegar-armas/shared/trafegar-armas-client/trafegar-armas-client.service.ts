/* tslint:disable:no-redundant-jsdoc */
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../../environments/environment';
import {FiltroAmigoDTO} from '../../../../shared/dto/filtro-amigo.dto';

/**
 * Classe de integração com o serviço de Usuário.
 */
@Injectable({
  providedIn: 'root'
})
export class TrafegarArmasClientService {

  /**
   * Construtor da classe.
   *
   * @param http
   */
  constructor(private http: HttpClient) { }

  /**
   * Retorna a instância de Amigo conforme o 'id' informado.
   *
   * @param id
   * @return
   */
  public getById(id: number): Observable<any> {
    return this.http.get(`${environment.urlApi}/arma/${id}`);
  }

  /**
   * Retorna o array de Amigo confome o filtro de pesquisa informado.
   *
   * @param filtroDTO
   */
  public getByFiltro(filtroDTO: FiltroAmigoDTO): Observable<any> {
    return this.http.get(`${environment.urlApi}/arma`, {
      params: filtroDTO.toParams()
    });
  }


  /**
   * Salva a instância de amigo.
   *
   * @param trafegarArma
   */
  public salvar(trafegarArma: any): Observable<any> {
    let result: Observable<any> = null;

    if (trafegarArma.id) {
      result = this.http.put(`${environment.urlApi}/arma/${trafegarArma.id}`, trafegarArma);
    } else {
      result = this.http.post(`${environment.urlApi}/arma/`, trafegarArma);
    }
    return result;
  }

  /**
   * Torna Amigo o Amigo pelo 'id' informado (é Amigo=true).
   *
   * @param id
   * @return
   */
  public tornarAmigo(id: number): Observable<any> {
    return this.http.put(`${environment.urlApi}/amigo/${id}/tornar-amigo`, {});
  }

  /**
   *  Deixa de ser amigo pelo 'id' do amigo informado.
   *
   * @param id
   * @return
   */
  public deixarAmizade(id: number): Observable<any> {
    return this.http.put(`${environment.urlApi}/amigo/${id}/deixar-amigo`, {});
  }

  /**
   * remover a instância de amigo.
   *
   * @param amigo
   */
  public remover(amigo: any): Observable<any> {
    let result: Observable<any> = null;

    result = this.http.delete(`${environment.urlApi}/arma/${amigo.id}`, {});

    return result;
  }

}
