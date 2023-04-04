import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { HttpRequestService } from 'src/app/common-services/http-request.service';
import { Movies } from 'src/app/models/Movies';
import { fromEvent, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movieData: Movies = {
    count: '',
    next: '',
    previous: '',
    results: [
      {
        title: '',
        description: '',
        genres: '',
        uuid: '',
      },
    ],
  };

  movie: any;
  modalRef!: BsModalRef;
  searchResults: any[] = [];
  searchQuery: any;

  @ViewChild('showMovie')
  showMovie!: TemplateRef<any>;

  constructor(
    private http: HttpRequestService,
    private modal: BsModalService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.getMovies();
  }

  //** Getting movie list */
  getMovies() {
    try {
      this.http
        .request('get', 'https://demo.credy.in/api/v1/maya/movies/', null)
        .subscribe((response: any) => {
          this.movieData = response;
          console.log('movieData -->', this.movieData);
          this.searchResults = this.movieData.results;
        });
    } catch (error) {}
  }

  //** Getting movie list from previous link */
  prevMovies(link: string) {
    try {
      this.http.request('get', link, null).subscribe((response: any) => {
        this.movieData = response;
        this.searchResults = this.movieData.results;
        console.log('movieData -->', this.movieData);
      });
    } catch (error) {}
  }

  //** Getting movie list from next link */
  nextMovies(link: string) {
    try {
      this.http.request('get', link, null).subscribe((response: any) => {
        this.movieData = response;
        this.searchResults = this.movieData.results;
        console.log('movieData -->', this.movieData);
      });
    } catch (error) {}
  }

  //** Getting image for ui-avatars */
  getImage(data: any) {
    return `https://ui-avatars.com/api/?name=${data}?background=random`;
  }

  //** Open pop-up modal */
  openModal(data: any) {
    this.movie = data;
    this.modalRef = this.modal.show(this.showMovie, {
      backdrop: 'static',
      ignoreBackdropClick: true,
      class: 'modal-lg modal-dialog-centered',
    });
  }

  //** Search Movie */
  searchMovie() {
    let movies = this.searchResults;

    console.log('movies -->', movies);

    const searchBox = document.getElementById('search') as HTMLInputElement;

    const searchBox$ = fromEvent(searchBox, 'input');
    const searchResults$ = searchBox$.pipe(
      debounceTime(250),
      map((event: Event) => (event.target as HTMLInputElement).value),
      distinctUntilChanged()
    );

    searchResults$.subscribe((query: string) => {
      if (query.length >= 3) {
        if (this.searchQuery != null) {
          const searchData = movies.filter((movie) =>
            movie.title.toLowerCase().includes(this.searchQuery.toLowerCase())
          );
          this.movieData.results = searchData;
        }
      } else {
        this.movieData.results = this.searchResults;
      }
    });
  }

  //** Navigate to login component */
  backToLogin() {
    localStorage.clear();
    this.route.navigateByUrl('/');
  }
}
