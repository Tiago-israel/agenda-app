import { ContatoService } from './../../services/contato.service';
import { Component, OnInit } from "@angular/core";
import { Contato } from '../../../models/contato.model';
import { LoadingIndicatorService } from '../../../utils/loading-indicator/loading-indicator.service';

@Component({
    selector: 'listar-contatos',
    templateUrl: './listar-contatos.component.html',
    styleUrls: ['./listar-contatos.component.css']
})
export class ListarContatosComponent implements OnInit {

    public contatos: Array<Contato> = new Array<Contato>();

    constructor(
        private contatoService: ContatoService,
        private loading: LoadingIndicatorService
    ) {

    }

    ngOnInit(): void {
        this.buscarTodos();
    }

    public buscarTodos(): void {
        this.loading.show();
        this.contatoService.getAll().subscribe(data => {
            this.contatos = data;
            this.loading.hide();
        });
    }

    public excluirContato(id: string) {
        this.loading.show();
        this.contatoService.delete(id).subscribe(
            () => {
                this.buscarTodos();
                this.loading.hide();
            }
        )
    }

}