import pandas
import geopandas

gdf = geopandas.read_file('/workspaces/transit-fairness/utilities/shapefiles/tl_2023_11_bg.geojson') # geojson file
gdf['GEOID'] = gdf['GEOID'].astype('int64')
pdf = pandas.read_csv('/workspaces/transit-fairness/utilities/paper_data/dc_stats.csv') # CSV file

joined_gdf = gdf.merge(pdf, on="GEOID")
joined_gdf.to_file('/workspaces/transit-fairness/frontend/src/assets/dc.geojson', driver="GeoJSON")