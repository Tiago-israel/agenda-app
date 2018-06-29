import { ContatoService } from './../../services/contato.service';
import { Component, OnInit } from "@angular/core";
import { Contato } from '../../../models/contato.model';
import { ActivatedRoute, Router } from '@angular/router';
import { TelefoneService } from '../../services/telefone.service';
import { LoadingIndicatorService } from '../../../utils/loading-indicator/loading-indicator.service';

@Component({
    selector: 'detalhes-component',
    templateUrl: './detalhes-contato.component.html',
    styleUrls: ['./detalhes-contato.component.css']

})
export class DetalhesContatoComponent implements OnInit {

    private id: string;
    public contato: Contato = new Contato();

    constructor(
        private contatoService: ContatoService,
        private telefoneService: TelefoneService,
        private route: ActivatedRoute,
        private router: Router,
        private loading: LoadingIndicatorService
    ) { }

    ngOnInit(): void {
        this.route.params.subscribe(
            (params: any) => {
                this.id = params['id'];
                if (this.id) {
                    this.buscarContatoPorId(this.id);
                }
            }
        )
    }

    public excluirTelefone(id: string): void {
        this.loading.show();
        this.telefoneService.delete(id).subscribe(
            () => {
                this.buscarContatoPorId(this.id);
                this.loading.hide();
            }
        )
    }

    private buscarContatoPorId(id: string): void {
        this.loading.show();
        this.contatoService.get(id).subscribe(data => {
            if (data)
                this.contato = data;
            this.loading.hide();
        });
    }

}