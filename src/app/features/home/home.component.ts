import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from '../../shared/components/loader/loader.component';
import { ConfirmDialogComponent } from '../../shared/components/confirm-dialog/confirm-dialog.component';
import { TruncatePipe } from '../../shared/pipes/truncate.pipe';
import { HighlightDirective } from '../../shared/directives/highlight.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, LoaderComponent, ConfirmDialogComponent, TruncatePipe, HighlightDirective],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'Welcome to Angular Modular App';
  features = [
    'Modular Architecture',
    'Shared Components',
    'Feature Modules',
    'Lazy Loading Ready'
  ];

  showLoader = false;
  showDialog = false;

  onConfirm(): void {
    console.log('Confirmed!');
    this.showDialog = false;
  }

  onCancel(): void {
    console.log('Cancelled!');
    this.showDialog = false;
  }
} 