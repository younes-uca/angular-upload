import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {RoleService} from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';

import {PurchaseDto} from '../model/Purchase.model';
import {PurchaseCriteria} from '../criteria/PurchaseCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

@Injectable({
    providedIn: 'root'
})
export class PurchaseService extends AbstractService<PurchaseDto, PurchaseCriteria> {
    constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/purchase/');
    }

    public constrcutDto(): PurchaseDto {
        return new PurchaseDto();
    }

    public constrcutCriteria(): PurchaseCriteria {
        return new PurchaseCriteria();
    }

    onFileSelected(event: any) {
        const selectedFile = event.files[0];
        if (selectedFile) {
            const formData = new FormData();
            formData.append('file', selectedFile);

            this.http.post<any>(this.API + 'import-excel', formData)
                .subscribe(
                    response => {
                        console.log('Succès :', response);
                        location.reload();
                    },
                    error => {
                        console.error('Erreur :', error);
                    }
                );
        }
    }
}
