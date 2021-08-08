import { Injectable } from '@angular/core';
import { CoreHttpService } from '../Providers/core/core-http/core-http.service';

@Injectable({
  providedIn: 'root'
})
export class DataTableService {

  url: string = "https://hn.algolia.com/api/v1/search_by_date?tags=story"
  constructor(private coreHttpService: CoreHttpService) { }

  getData = <TResponse>() => {
    return this.coreHttpService.getRequest<TResponse>(this.url);
  }

}
