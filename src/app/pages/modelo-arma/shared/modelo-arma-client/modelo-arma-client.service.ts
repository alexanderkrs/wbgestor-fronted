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
<<<<<<<< HEAD:src/app/pages/entrada-arma/shared/entrada-arma-client/entrada-arma-client.service.ts
export class EntradaArmaClientService {
========
export class ModeloArmaClientService {
>>>>>>>> osmar-frontend:src/app/pages/modelo-arma/shared/modelo-arma-client/modelo-arma-client.service.ts

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
<<<<<<<< HEAD:src/app/pages/entrada-arma/shared/entrada-arma-client/entrada-arma-client.service.ts
    return this.http.get(`${environment.urlApi}/entradaarma/${id}`);
========
    return this.http.get(`${environment.urlApi}/modeloarma/${id}`);
>>>>>>>> osmar-frontend:src/app/pages/modelo-arma/shared/modelo-arma-client/modelo-arma-client.service.ts
  }

  /**
   * Retorna o array de Usuários confome o filtro de pesquisa informado.
   *
   * @param filtroDTO
   */
  public getByFiltro(filtroDTO: FiltroUsuarioDTO): Observable<any> {
<<<<<<<< HEAD:src/app/pages/entrada-arma/shared/entrada-arma-client/entrada-arma-client.service.ts
    return this.http.get(`${environment.urlApi}/entradaarma`, {
========
    return this.http.get(`${environment.urlApi}/modeloarma`, {
>>>>>>>> osmar-frontend:src/app/pages/modelo-arma/shared/modelo-arma-client/modelo-arma-client.service.ts
      params: filtroDTO.toParams()
    });
  }

  /**
   * Salva a instância de Usuário.
   *
<<<<<<<< HEAD:src/app/pages/entrada-arma/shared/entrada-arma-client/entrada-arma-client.service.ts
   * @param entradaArma
   */
  public salvar(entradaArma: any): Observable<any> {
========
   * @param modeloArma
   */
  public salvar(modeloArma: any): Observable<any> {
>>>>>>>> osmar-frontend:src/app/pages/modelo-arma/shared/modelo-arma-client/modelo-arma-client.service.ts
    let result: Observable<any> = null;
      result = this.http.post(`${environment.urlApi}/arma/entrada/`, entradaArma);

<<<<<<<< HEAD:src/app/pages/entrada-arma/shared/entrada-arma-client/entrada-arma-client.service.ts
========
    if (modeloArma.id) {
      result = this.http.put(`${environment.urlApi}/modeloarma/${modeloArma.id}`, modeloArma);
    } else {
      console.log(modeloArma);
      result = this.http.post(`${environment.urlApi}/modeloarma/`, modeloArma);
    }
>>>>>>>> osmar-frontend:src/app/pages/modelo-arma/shared/modelo-arma-client/modelo-arma-client.service.ts
    return result;
  }

  /**
   * Salva a instância de Usuário.
   *
<<<<<<<< HEAD:src/app/pages/entrada-arma/shared/entrada-arma-client/entrada-arma-client.service.ts
   * @param entradaArma
   */
  public remover(entradaArma: any): Observable<any> {
    let result: Observable<any> = null;

    result = this.http.delete(`${environment.urlApi}/entradaarma/${entradaArma.id}`, {});
========
   * @param modeloArma
   */
  public remover(modeloArma: any): Observable<any> {
    let result: Observable<any> = null;

    result = this.http.delete(`${environment.urlApi}/modeloarma/${modeloArma.id}`, {});
>>>>>>>> osmar-frontend:src/app/pages/modelo-arma/shared/modelo-arma-client/modelo-arma-client.service.ts

    return result;
  }

}
