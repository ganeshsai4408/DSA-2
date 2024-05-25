int largest(int arr[], int n) {
    int ld = arr[0];
    for(int i=0;i<n;i++){
        if(arr[i]>ld)
            ld = arr[i];
    }
  return ld;
}