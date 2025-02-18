package com.demo.Service;

import java.util.List;

import com.demo.Model.Product;

public interface ProductService {
	
	public Product saveproduct (Product product);
	
	public List<Product> getallproduct();
	
	public Product getproductbyid(Long id);
	
	public String deleteproduct(Long id);
	
	public Product editProduct(Product product,Long id);
	

}
